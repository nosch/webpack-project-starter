'use strict';

import 'babel-core/polyfill';
import css from './css/styles.css';
import React from 'react';
import AppContent from './js/Content';

React.render(<AppContent />, document.querySelector('.app'));
