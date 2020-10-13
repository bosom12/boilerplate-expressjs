import express from 'express';
import { Setup } from './app.setup';

export class App extends Setup {

  constructor() { 
    super(express());

    this.buildConfigurations();
  }

  buildConfigurations() {
    this.useApplicationMiddlewares();
    
		this.useCorsSecurityConfig();
		
    this.useSwaggerDocumentConfig();
    
		this.setGlobalRoutePrefix('/api/v1');
		
		this.catchUnknownRoute();
  }

  run() {
    this.start();
  }
}

new App().run();