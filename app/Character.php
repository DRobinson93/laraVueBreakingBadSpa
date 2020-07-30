<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $fillable = [
        'id', 'name', 'birthday', 'img', 'status', 'nickname', 'portrayed', 'category'
    ];

}
