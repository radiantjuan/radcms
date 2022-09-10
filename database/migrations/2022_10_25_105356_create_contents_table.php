<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('content_types_id')->index()->nullable();
            $table->unsignedBigInteger('parent_id')->index()->nullable();
            $table->unsignedBigInteger('widgets_id')->index()->nullable();
            $table->unsignedBigInteger('pages_id')->index();
            $table->string('value')->nullable();
            $table->json('attributes')->nullable();
            $table->unsignedInteger('sorting');
            $table->timestamps();
            $table->foreign('widgets_id')->references('id')->on('widgets');
            $table->foreign('parent_id')->references('id')->on('contents');
            $table->foreign('pages_id')->references('id')->on('pages');
            $table->foreign('content_types_id')->references('id')->on('content_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contents');
    }
}
