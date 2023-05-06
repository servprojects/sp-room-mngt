import { useDispatch } from 'react-redux'
import actions from '../redux/Authenticate/actions';
import { useSelector } from 'react-redux'
import { Form, Input, Button, Checkbox, Row, Col, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import LoginForm from './Forms/Login';

function LoginPage() {
  const { loader } = useSelector(state => state.authenticateReducer)

  const dispatch = useDispatch();

  let onFinish = (values) => {
    dispatch({
      type: actions.LOGIN,
      payload: { 'email': values.email, 'password': values.password, 'remember': values.remember },
    });
  };

  return (
    <>
      <LoginForm />
    </>
  );
}

export default LoginPage;
