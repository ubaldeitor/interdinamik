<?php
namespace App\Repositories;
use App\Repositories\RepositoryInterface;
use App\Link;

interface LinkRepositoryInterface extends RepositoryInterface {
    public function getAllByType(string $type);
}