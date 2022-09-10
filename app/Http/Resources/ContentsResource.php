<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ContentsResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request) {
        return [
            'content_type' => new ContentTypesResource($this->content_types),
            'id' => $this->id,
            'sorting' => $this->sorting,
            'value' => $this->value,
            'widget' => new WidgetResource($this->widgets),
            'children_content' => self::collection($this->children_content),
            'attributes' => $this->attributes
        ];
    }
}
