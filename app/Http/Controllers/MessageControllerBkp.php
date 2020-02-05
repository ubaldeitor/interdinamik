<?php

namespace App\Http\Controllers;

use App\Message;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Repositories\RepositoryMessageInterface;
use App\Http\Controllers\Controller;

class MessageController extends Controller{
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
    public function __construct(RepositoryMessageInterface $repository)
    {
        $this->repository = $repository;
    }
    
    public function saveMessage(Request $request){
        $message = [
            'name' => $request->input('payload.nametxt'),
            'phone' => $request->input('payload.phonetxt'),
            'email' => $request->input('payload.emailtxt'),
            'message' => $request->input('payload.messagetxt')
    ];
        try{
            $this->repository->create($message);
        } catch(Exception $ex){
            report($ex);
            return response()->json([
                'code' => '500',
                'state' => 'error',
                'msg' => 'No se pudo enviar el mensaje. Intente más tarde'    
            ]);
        }
        return response()->json([
            'code' => '200',
            'state' => 'success',
            'msg' => 'El mensaje fue enviado correctamente. En breve nos pondremos en contacto contigo.'
        ]);
    }

    public function getAllMessages(Request $request){
        $isLoggedIn = $request->input('isLoggedIn');
        if($isLoggedIn){
            try{
                $messages = $this->repository->all();
                if(!empty($messages)){
                    return response()->json([
                        'code'=> '200',
                        'state'=> 'success',
                        'messages'=>$messages,
                        'msg' => 'Mensajes recuperados.'
                    ]);
                } else {
                    return response()->json([
                        'code' => '202',
                        'state' => 'success but no data found',
                        'messages' => [],
                        'msg' => 'No se encontraron mensajes'
                    ]);         
                }
            } catch(Exception $ex){
                report($ex);
                return response()->json([
                    'code' => '500',
                    'state' => 'error',
                    'msg' => 'No se pudieron recuperar los mensajes. Intente más tarde'    
                ]);
            }
        }
    }
}