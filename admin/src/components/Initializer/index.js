/**
 *
 * Initializer
 *
 */

import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Exit} from '@strapi/icons';

const Initializer = ({ setPlugin }) => {
  const ref = useRef();
  ref.current = setPlugin;

  useEffect(() => {
    ref.current(pluginId);
    setTimeout(() => {
      const settingDiv = document.getElementById('main-nav-user-button');


      settingDiv.innerHTML = `<a href="${window.location.origin}/admin/plugins/strapi-sso-plugin/logout" style="color:red; font-size:14px; text-decoration:none;">Logout</a>`
    }, 1500);


  }, []);

  return null;
};


Initializer.propTypes = {
  setPlugin: PropTypes.func.isRequired,
};

export default Initializer;
