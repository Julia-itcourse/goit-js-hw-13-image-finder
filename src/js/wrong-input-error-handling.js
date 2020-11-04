import refs from './refs';
import loadMoreBtnAction from './load-more-btn-action'
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const onWrongErrorHandling = () => {
    loadMoreBtnAction.hide();
      error({
        title: 'Wrong search!',
        text: 'Enter something meaningful',
      });
}

export default onWrongErrorHandling