<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'created_at' => $this->created_at->format('d-m-Y H:i'),
            'updated_at' => $this->updated_at->format('d-m-Y H:i'),
            'name' => $this->name,
            'reservation_time' => $this->reservation_time,
            'reservation_date' => $this->reservation_date,
            'num_people' => $this->num_people,
            'status' => $this->status,
            'email' => $this->email,
            'phone' => $this->phone,
        ];
    }
}
