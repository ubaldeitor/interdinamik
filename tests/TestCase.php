<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    if(!defined('LARAVEL_START')) {
        define('LARAVEL_START', microtime(true));
    }
    use CreatesApplication;
}
