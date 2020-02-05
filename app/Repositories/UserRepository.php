<?php

namespace App\Repositories;

use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repositories\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
    protected $model;

    /**
     * PostRepository constructor.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function all()
    {
        $this->model->all();
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update(array $data, $id)
    {
        return $this->model->where('id', $id)
            ->update($data);
    }

    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    public function find($id)
    {
        if (null == $user = $this->model->find($id)) {
            throw new ModelNotFoundException("User not found");
        }

        return $user;
    }

    public function getByUserAndPassword(Array $user){
        return $this->model->where('email',$user['email'])->where('password',$user['password'])->get();
    }
}