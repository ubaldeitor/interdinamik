<?php
namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Repositories\UserRepositoryInterface;

class LoginController extends Controller{
    /**
     * The message repository instance.
     */
    private $repository;

    /**
     * Create a new controller instance.
     *
     * @param  MessageRepository  $messages
     * @return void
     */
    public function __construct(UserRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }
    
    public function validateUser(Request $request){
        $user = [
            'password' => $request->input('password'),
            'email' => $request->input('email')
    ];
        try{
            $this->repository->getByUserAndPassword($user);
        } catch(Exception $ex){
            report($ex);
            return response()->json([
                'code' => '500',
                'state' => 'error',
                'msg' => 'El usuario o la contraseña no cohinciden.'    
            ]);
        }
        return response()->json([
            'code' => '202',
            'state' => 'success',
            'msg' => 'Usuario válido.'
        ]);
    }
}