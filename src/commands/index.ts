import { navigateRails } from './navigation';
import { switchToView } from './switch-to-view';
import { switchToModel } from './switch-to-model';
import { switchToTest } from './switch-to-test';
import { switchToController } from './switch-to-controller';
import { switchToFixture } from './switch-to-fixture';
import { createView } from './create-view';
import { createSpec } from './create-spec';

export const commands = {
  fastNavigation: navigateRails,
  switchToView: switchToView,
  switchToModel: switchToModel,
  switchToTest: switchToTest,
  switchToSpec: switchToTest,
  switchToController: switchToController,
  switchToFixture,
  createView,
  createSpec,
};
