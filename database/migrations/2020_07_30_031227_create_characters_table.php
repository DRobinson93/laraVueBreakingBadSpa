<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharactersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('characters', function (Blueprint $table) {
            //'id', 'name', 'birthday', 'img', 'status', 'nickname', 'portrayed', 'category'
            $table->id();
            $table->string('img', 500);
            foreach(['name', 'status', 'nickname', 'portrayed', 'category'] as $strColName){
               $table->string($strColName);
            }
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characters');
    }
}
