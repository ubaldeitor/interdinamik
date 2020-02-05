<?php

namespace App\Repositories;

use App\Message;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repositories\RepositoryMessageInterface;

class MessageRepository implements RepositoryMessageInterface
{
    protected $model;

    /**
     * PostRepository constructor.
     *
     * @param Message $message
     */
    public function __construct(Message $message)
    {
        $this->model = $message;
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
        if (null == $message = $this->model->find($id)) {
            throw new ModelNotFoundException("Message not found");
        }

        return $message;
    }
}