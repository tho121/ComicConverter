import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the ComicConverter3.0 extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'ComicConverter3.0',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension ComicConverter3.0 is activated!');
  }
};

export default extension;
