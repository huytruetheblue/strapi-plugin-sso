import React, {memo, useEffect} from 'react';

import { useHistory } from 'react-router-dom';
import axios from '../../utils/axiosInstance'

import {
  auth,
  getFetchClient,
} from '@strapi/helper-plugin';


const LogoutPage = () => {
    const { post } = getFetchClient();
    const history = useHistory();
  useEffect( () => {
    const init = async () => {
      await post('/admin/logout');
      auth.clearAppStorage();
      try {
        await axios.get(`/strapi-sso-plugin/oidc/logout`)
      }catch(e){
        console.log(e)
      }
      window.location.href = `${window.location.origin}/strapi-sso-plugin/oidc`;
    }
    init()
  }, [history, post])


    return <div>Logout Hoan 1</div>;
}

export default memo(LogoutPage);
