import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/InputField/input';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit }) {
  const schema = yup.object({
    title: yup
      .string()
      .required('Not string emtry')
      .min(5, 'Title is too short'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value) => {
    if (onSubmit) {
      onSubmit(value);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
