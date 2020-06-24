import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SOCIAL_NETWORKS } from './contants/socialNetworks.js';
import styles from './index.module.scss';

export default function SocialNetworks() {
  return (
    <div className={styles.containerSocialNet}>

      {SOCIAL_NETWORKS.map(socialNet => (
        <div key={socialNet.id} className={styles.socialNet}>
          <a href={socialNet.externalPath} target="blank" className={styles[socialNet.nameSocial]}>
            <FontAwesomeIcon icon={socialNet.icon} className={styles.icon} />
          </a>
          <a href={socialNet.externalPath} target="blank" className={styles.userSocialNet}>{socialNet.userName}</a>
        </div>
      ))}
    </div>
  );
}
