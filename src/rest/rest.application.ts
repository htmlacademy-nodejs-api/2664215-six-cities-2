import type{ Config } from '../shared/libs/config/index.js';
import type { Logger } from '../shared/libs/logger/index.js';

export class RestApplication {
  constructor(
    private readonly config: Config,
    private readonly logger: Logger,
  ) {}

  public async init() {
    this.logger.info('Application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}
