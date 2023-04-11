<?php

namespace App\Console\Commands;

use App\Models\Blast;
use App\Models\Campaign;
use App\Models\Contact;
use App\Models\Device;
use App\Services\WhatsappService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Symfony\Polyfill\Intl\Idn\Info;

class StartBlast extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'start:blast';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    protected $wa;
    public function __construct(WhatsappService $wa)
    {
        parent::__construct();
        $this->wa = $wa;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $waitingCampaigns = Campaign::where('schedule', '<=', now())
            ->whereIn('status', ['waiting', 'processing'])
            ->with('phonebook', 'device')
            ->get();
     

        foreach ($waitingCampaigns as $campaign) {
            $countPhonebook = $campaign->phonebook->contacts()->count();
            if ($countPhonebook == 0) {
                $campaign->update(['status' => 'failed']);
                continue;
            }

            if ($campaign->device->status != 'Connected') {
                $campaign->update(['status' => 'paused']);
                continue;
            }

            $campaign->update(['status' => 'processing']);
            $pendingBlasts = $this->getPendingBlasts($campaign);
            if ($pendingBlasts->count() == 0) {
                continue;
            }
            // send progress

            $blastdata = [];

            foreach ($pendingBlasts as $blast) {
                $blastdata[] = [
                    'receiver' => $blast->receiver,
                    'message' => $blast->message,
                ];
            }
            $data = [
                'data' => $blastdata,
                'delay' => 1,
                'delay' => $campaign->delay,
                'campaign_id' => $campaign->id,
                'sender' => $campaign->device->body,
            ];

            try {
                $results = $this->wa->startBlast($data);
                if ($results->status == 'true') {
                    $successN = ($results->success);
                    $failedN = ($results->failed);
                    $campaign
                        ->blasts()
                        ->whereIn('receiver', $successN)
                        ->update(['status' => 'success']);
                    $campaign
                        ->blasts()
                        ->whereIn('receiver', $failedN)
                        ->update(['status' => 'failed']);
                    $check = $campaign
                        ->blasts()
                        ->where('status', 'pending')
                        ->exists();
                    if (!$check) {
                        $campaign->update(['status' => 'completed']);
                    }
                    $campaign->device->update(['message_sent' => $campaign->device->message_sent + count($successN)]);

                }
            } catch (\Throwable $th) {
                $pendingBlasts->map(function ($item) {
                    $item->update(['status' => 'failed']);
                });
                Log::error($th);
            }
        }

        return 0;
    }

    public function getPendingBlasts($campaign)
    {
        $pendingBlasts = $campaign
            ->blasts()
            ->where('status', 'pending')
            ->limit(10)
            ->get();
        if ($pendingBlasts->count() == 0) {
            $campaign->update(['status' => 'completed']);
            return collect();
        }
        return $pendingBlasts;
    }
}
