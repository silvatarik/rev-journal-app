import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm/useForm';
import validator from 'validator';
import { RemoveError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterView = () => {
    let nameError = true;
    let emailError = true;
    let passwordError = true;
    let password2Error = true;

    /* Con el useSelector podemos acceder al state */
    const state = useSelector(state => state);
    const { ui } = state;
    /* Con esto ya tenemos acceso al dispatch */
    const dispatch = useDispatch();


    const [formValues, handleInputChange, reset] = useForm({
        name: 'juan',
        email: 'juan@ejemplo.com',
        password: '1234567',
        password2: '1234567'
    });

    const { name, email, password, password2 } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            console.log('Formulario correcto')
            dispatch(RemoveError());
            dispatch(startRegisterWithEmailPassword(email, password, name));
        } else dispatch(setError('Formulario Erroneo'));
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            console.log('El nombre es incorrecto')
            nameError = false;
            return false;
        }
        else if (!validator.isEmail(email)) {
            emailError = false;
            return false;
        }

        else if (password === "" || password.length < 6) {
            passwordError = false;
            return false;
        }

        else if (password2 !== password) {
            password2Error = false;
            return false
        }

        nameError = true;
        emailError = true;
        passwordError = true;
        password2Error = true;

        return true;
    }

    return (
        <>
            {
                (ui.msgError !== null) ?
                    (<div className="alert alert-error mt-5 mx-5">
                        <div className="flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
                            </svg>
                            <label>{ui.msgError}</label>
                        </div>
                    </div>)
                    :
                    (
                        (ui.msgError == null) ? ''
                            :
                            (<div className="alert alert-success mt-5 mx-5">
                                <div className="flex-1">
                                    <div className="px-2"><i className="far fa-check-circle"></i></div>
                                    <label>Registro Completado</label>
                                </div>
                            </div>)
                    )
            }

            <div className="hero min-h-screen">

                <div className="hero-content w-96 bg-base-200 rounded">
                    <form onSubmit={handleSubmit} className="p-5 w-full">
                        <h1 className=" text-5xl py-3 font-bold">
                            Registro
                        </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><i className="fas fa-user mr-2"></i>Nombre</span>
                            </label>
                            <input type="text" placeholder="Introduzca su Email" className={(!isFormValid() && !nameError) ? 'input input-error' : 'input'} name="name" onChange={handleInputChange} value={formValues.name} />
                            <label className="label"><span className={(!isFormValid() && !nameError) ? 'label-text-alt text-red-500' : 'hidden'}>Nombre no puede estar vacio</span></label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><i className="far fa-envelope mr-2"></i>Email</span>
                            </label>
                            <input type="text" placeholder="Introduzca su Email" className={(!isFormValid() && !emailError) ? 'input input-error' : 'input'} name="email" onChange={handleInputChange} value={formValues.email} />
                            <label className="label"><span className={(!isFormValid() && !emailError) ? 'label-text-alt text-red-500' : 'hidden'}>Email debe tener el formato ejemplo@gmail.com</span></label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><i className="fas fa-key mr-2"></i>Contraseña</span>
                            </label>
                            <input type="password" placeholder="Introduzca contraseña" className={(!isFormValid() && !passwordError) ? 'input input-error' : 'input'} name="password" onChange={handleInputChange} value={formValues.password} />
                            <label className="label"><span className={(!isFormValid() && !passwordError) ? 'label-text-alt text-red-500' : 'hidden'}>No puede estar vacio y debe tener minimo 7 caracteres</span></label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><i className="fas fa-key mr-2"></i>Repita Contraseña</span>
                            </label>
                            <input type="password" placeholder="Introduzca contraseña" className={(!isFormValid() && !password2Error) ? 'input input-error' : 'input'} name="password2" onChange={handleInputChange} value={formValues.password2} />
                            <label className="label"><span className={(!isFormValid() && !password2Error) ? 'label-text-alt text-red-500' : 'hidden'}>La contraseñas deben ser iguales</span></label>
                        </div>

                        <Link to="/auth/login" className="link link-primary">Ya estás registrado</Link>

                        <div className="flex justify-between">
                            <div className="flex-initial">
                                <button onClick={reset} type="button" className="btn btn-warning  mt-5">Reset</button>
                            </div>
                            <div className="w-full">
                                <button type="submit" className="btn btn-primary w-full ml-1 mt-5">Registrar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}
