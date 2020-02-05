<?php

namespace App\Repositories;

use App\Element;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repositories\ElementRepositoryInterface;

class ElementRepository implements ElementRepositoryInterface
{
    protected $model;

    /**
     * PostRepository constructor.
     *
     * @param Element $element
     */
    public function __construct(Element $element)
    {
        $this->model = $element;
    }

    public function all()
    {
        return $this->model->all();
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
        if (null == $element = $this->model->find($id)) {
            throw new ModelNotFoundException("Element not found");
        }

        return $element;
    }
}