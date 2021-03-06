<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Element extends Model
{
    protected $fillable = [
        'fieldName',
        'description',
        'type',
        'value',
        'label',
        'path'
    ];

}
