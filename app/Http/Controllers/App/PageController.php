<?php

namespace App\Http\Controllers\App;

use App\Element;
use App\Link;
use App\Contact;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Repositories\ElementRepositoryInterface;
use App\Repositories\LinkRepositoryInterface;
use App\Repositories\ContactRepositoryInterface;
use App\Http\Controllers\Controller;


class PageController extends Controller{
    /**
     * The message repository instance.
     */
    private $elementRepository;
    private $linkRepository;
    private $contactRepository;

    /**
     * Constructor controller page 
     */
    public function __construct(LinkRepositoryInterface $linkRepository,
        ContactRepositoryInterface $contactRepository,
        ElementRepositoryInterface $elementRepository
    )
    {
        $this->linkRepository = $linkRepository;
        $this->elementRepository = $elementRepository;
        $this->contactRepository = $contactRepository;
    }
    
    public function updateElements(Request $request){
        $elements = [
            //Page elements array here
    ];
        try{
            $this->repository->create($element);
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

    public function getAllElements(Request $request){
        try{
            $elements = $this->elementRepository->all();
                if(!empty($elements)){
                    return response()->json([
                        'code'=> '200',
                        'state'=> 'success',
                        'elements'=>$elements,
                        'msg' => 'Page elements recovered.'
                    ]);
                } else {
                    return response()->json([
                        'code' => '202',
                        'state' => 'success but no data found',
                        'elements' => [],
                        'msg' => 'No elements was found'
                    ]);         
                }
            } catch(Exception $ex){
                report($ex);
                return response()->json([
                    'code' => '500',
                    'state' => 'error',
                    'msg' => 'Elements can not be recovered'    
                ]);
            }
    }
}