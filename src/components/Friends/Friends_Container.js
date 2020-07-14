import React from "react";
import { connect } from "react-redux";
// import FriendsAPIComponent from './FriendsAPIComponent'
import {
  follow,
  unfollow,
  setFriends,
  setCurrentPage,
  setTotalFriendsCount,
  getUsers,
  toggleIsFetching,
  toggleFollowingProgress,
} from "../../redux/friends_reducer";
import * as axios from "axios";
import { render } from "@testing-library/react";
import Friends from "./Friends";
// import loader from './Friends/loader/loader.svg';
import Loader from "../Loader/Loader";
import { usersAPI } from "../API/API";

class FriendsAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Friends
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onChangePage={this.onChangePage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followingInProgress: state.friendsPage.followingInProgress,
  };
};


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(FriendsAPIComponent);
