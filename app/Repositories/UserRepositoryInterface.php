<?php
namespace App\Repositories;
use App\Repositories\RepositoryInterface;
use App\User;

interface UserRepositoryInterface extends RepositoryInterface{
    public function getByUserAndPassword(Array $user);
} 

