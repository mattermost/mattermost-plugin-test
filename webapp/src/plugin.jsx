import {FormattedMessage} from 'react-intl';

import {ChannelHeaderButtonIcon} from './components/icons';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        for (let i = 0; i < 15; i++) {
            registry.registerChannelHeaderButtonAction(
                <ChannelHeaderButtonIcon/>,
                // eslint-disable-next-line no-empty-function
                () => {},
                <FormattedMessage
                    id='plugin.name'
                    defaultMessage='Test Plugin {num}'
                    values={{num: i + 1}}
                />,
            );
        }
    }
}
