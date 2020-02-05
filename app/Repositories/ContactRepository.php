<?php

namespace App\Repositories;

use App\Contact;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Repositories\ContactRepositoryInterface;

class ContactRepository implements ContactRepositoryInterface
{
    protected $model;

    /**
     * PostRepository constructor.
     *
     * @param Contact $contact
     */
    public function __construct(Contact $contact)
    {
        $this->model = $contact;
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
        if (null == $contact = $this->model->find($id)) {
            throw new ModelNotFoundException("Contact not found");
        }

        return $contact;
    }
}