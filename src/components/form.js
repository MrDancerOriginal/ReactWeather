import React from "react";

const FormComponent = props => (
    <form onSubmit={props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Получить</button>
            </form>
);

export default FormComponent;