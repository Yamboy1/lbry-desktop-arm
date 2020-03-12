// @flow
import React from 'react';
import Nag from 'component/common/nag';
import TagsSelect from 'component/tagsSelect';

type Props = {
  subscribedChannels: Array<Subscription>,
  onContinue: () => void,
  followedTags: Array<Tag>,
};

function UserChannelFollowIntro(props: Props) {
  const { onContinue, followedTags } = props;
  const followingCount = (followedTags && followedTags.length) || 0;

  return (
    <React.Fragment>
      <h1 className="section__title--large">{__('Tag Selection')}</h1>
      <p className="section__subtitle">{__('Select some tags to help us show you interesting things.')}</p>
      <div className="section__body">
        <TagsSelect showClose={false} title={__('Follow New Tags')} />
        {followingCount > 0 && (
          <Nag
            type="helpful"
            message={
              followingCount === 1
                ? __('You are currently following %followingCount% creator', { followingCount })
                : __('You are currently following %followingCount% creators', { followingCount })
            }
            actionText={__('Continue')}
            onClick={onContinue}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default UserChannelFollowIntro;
