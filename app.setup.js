import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from "cors";
import jsend from 'jsend';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import Routes from './routes/index';

export class Setup {

	constructor(app) {
    this.app = app;
    this.port = parseInt(process.env.PORT, 10);
	};

  useApplicationMiddlewares()
  {
		this.app.use(jsend.middleware);
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
  };

  useCorsSecurityConfig()
  {
    this.app.use(cors());
  }
  
  useSwaggerDocumentConfig()
  {
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  setGlobalRoutePrefix(prefix)
  {
		this.app.use(prefix, Routes.router);
  }

  catchUnknownRoute()
  {
		this.app.use('/*', async (_, res) => {
			return res.status(404).jsend.fail({ status: 404, message: 'Route unknown' });
		});
  }

  start() {
		const message = "\tApp is running at http://localhost:%d in %s mode";
		const env = process.env.NODE_ENV;

		if (env === 'production')
			console.info('\tApp is running on %s mode', env);
		else console.info(message, this.port, env);

		this.app.listen(this.port, () => {
		  console.info("\t**Press CTRL + C to stop**");
		});
	};
}