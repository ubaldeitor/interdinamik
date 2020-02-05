<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        
        //
        $this->app->bind(
            'App\Repositories\RepositoryMessageInterface',
            'App\Repositories\MessageRepository');
        $this->app->bind('App\Repositories\UserRepositoryInterface',
            'App\Repositories\UserRepository');
            $this->app->bind('App\Repositories\ContactRepositoryInterface',
            'App\Repositories\ContactRepository');
            $this->app->bind('App\Repositories\LinkRepositoryInterface',
            'App\Repositories\LinkRepository');
            $this->app->bind('App\Repositories\ElementRepositoryInterface',
            'App\Repositories\ElementRepository');
        }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
