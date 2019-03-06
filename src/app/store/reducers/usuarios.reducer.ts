import { Usuario } from "src/app/models/usuario.model";
import * as fromUsuarios from '../actions/usuarios.actions';

export interface UsuariosState{
    users:Usuario[];
    loaded:boolean;
    loading: boolean;
    error:any;

}

const estadoInicial: UsuariosState ={ 
    users:[],
    loaded:false,
    loading:false,
    error:null
};


    export function usuariosReducer(state = estadoInicial, action:fromUsuarios.usuariosAcciones): UsuariosState{
    
        switch (action.type) {

            case fromUsuarios.CARGAR_USUARIOS:
                
                return{
                    ...state,
                    loading:true
                };
      
            case fromUsuarios.CARGAR_USUARIOS_SUCCESS:

            return{
                  ...state,
                  loaded:false,
                  loading:true,
                  users: [...action.usuarios]
            };

            case fromUsuarios.CARGAR_USUARIOS_FAIL:

            return{
                ...state,
                loaded:false,
                loading:false,
                error:action.payload
            }
                
        
            default:
                return state;
        }
        

    }

    