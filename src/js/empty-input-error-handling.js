
import refs from './refs';
import loadMoreBtnAction from './load-more-btn-action'
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const onEmptyErrorHandling = () => {
    
     loadMoreBtnAction.hide();
      error({
        title: 'Ooopsie! Nothing to search for!',
        text: 'Enter something...',
      });
}

export default onEmptyErrorHandling