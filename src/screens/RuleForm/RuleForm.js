import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import InputField from '../InputField';
import TextField from '../TextField';
import { errorMessages } from '../../utils/errorMessages';
import { useParams } from 'react-router-dom';
import { RulesContext } from '../../RulesProvider';

function RuleForm() {
    const { id } = useParams();
    const { rules } = useContext(RulesContext);
    const rule = rules.find(rule => rule.id === parseInt(id, 10));
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">New rule</h3>
            </div>
            <div className="panel-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        name="rule-title"
                        title="Title"
                        placeholder="Title"
                        inputRef={
                            register({
                                required: true,
                                maxLength: 50
                            })
                        }
                        defaultValue={rule ? rule.title : ''} />
                    {errors["rule-title"] && <span>{errorMessages[errors['rule-title'].type]}</span>}
                    <TextField
                        name="rule-desc"
                        title="Description"
                        placeholder="Description"
                        inputRef={register({ required: true, minLength: 5, maxLength: 100 })} />
                    {errors["rule-desc"] && <span>{errorMessages[errors['rule-desc'].type]}</span>}
                    <button type="submit" className="btn btn-primary pull-right">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default RuleForm;