<?php

namespace App\Repositories;

use App\Link;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repositories\LinkRepositoryInterface;

class LinkRepository implements LinkRepositoryInterface
{
    protected $model;

    /**
     * PostRepository constructor.
     *
     * @param User $user
     */
    public function __construct(Link $link)
    {
        $this->model = $link;
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
        if (null == $link = $this->model->find($id)) {
            throw new ModelNotFoundException("Link not found");
        }

        return $link;
    }

    public function getAllByType(string $type){
        return $this->model->where('type',$type)->get();
    }
}