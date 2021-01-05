import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import avatar from '../images/user.png';
import { whiteButtonTheme } from '../styles/materialui';
import { authApi } from '../shared/api';
import { END_POINTS } from '../endpoints';
import { HTTP_POST } from '../constants';
import * as actions from '../store/actions/index';

const RecommendedUsersRow = ({
  user, userId, userAvatar, username, displayname, addFollowing,
}) => {
  const [followLoading, setFollowLoading] = useState(false);
  const [followSuccess, setFollowSuccess] = useState(user.following.includes(userId));

  const history = useHistory();

  const goToUser = (passedUsername) => {
    history.push(`/user/${passedUsername}`);
  };

  const followUser = async () => {
    setFollowLoading(true);

    try {
      const { success } = await authApi(END_POINTS.follow({ username }), { method: HTTP_POST });
      if (success) {
        setFollowLoading(false);
        setFollowSuccess(true);
        addFollowing(userId);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div class="flex text-left p-4 border-t border-solid border-dividerGray items-center">
      <img
        src={userAvatar || avatar}
        alt="avatar"
        class="rounded-full w-50px h-50px "
      />

      <div class="flex flex-1 flex-col ml-2">
        <p class="mb-0 cursor-pointer hover:underline" onClick={() => goToUser(username)}>{username}</p>
        <p class="mb-0 text-textgray">{displayname}</p>
      </div>

      <ThemeProvider theme={whiteButtonTheme}>
        <div class="flex my-auto">
          {followSuccess ? <p class="mb-0 text-textgray "><FormattedMessage id="followed" /></p>
            : (
              <Button
                type="primary"
                shape="round"
                size="large"
                onClick={() => followUser()}
                disabled={followLoading}
              >
                <div class="flex items-center">

                  <div class="pl-2">
                    <FormattedMessage id="follow" />
                  </div>

                </div>
              </Button>
            ) }

        </div>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  addFollowing: (followingUserId) => dispatch(actions.addFollowing(followingUserId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedUsersRow);
