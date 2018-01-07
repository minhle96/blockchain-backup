import { TransactionContants } from '../contants';
import { transactionServices } from '../services';

export const transactionActions = {
  getMy,
  getNewest,
  getPending,
  getDetail
}

function getMy() {
  return dispatch => {
    dispatch(request());
    transactionServices.getMyTransaction()
      .then(
        transactions => {
          dispatch(success(transactions))
        },
        error => {
          dispatch(failure(error));
        }
    );
  }
  function request() {
    return {
      type: TransactionContants.ME_REQUEST
    }
  }

  function success(transactions) {
    return {
      type: TransactionContants.ME_SUCCESS,
      transactions
    }
  }

  function failure(error) {
    return {
      type: TransactionContants.ME_FAILURE,
      error
    }
  }
}

function getNewest() {
  return dispatch => {
    dispatch(request());
    transactionServices.getNewestTransaction()
      .then(
        transactions => {
          dispatch(success(transactions))
        },
        error => {
          dispatch(failure(error));
        }
    );
  }
  function request() {
    return {
      type: TransactionContants.ME_REQUEST,
    }
  }

  function success(transactions) {
    return {
      type: TransactionContants.ME_SUCCESS,
      transactions
    }
  }

  function failure(error) {
    return {
      type: TransactionContants.ME_FAILURE,
      error
    }
  }
}

function getPending() {
  return dispatch => {
    dispatch(request());
    transactionServices.getPendingTransaction()
      .then(
        transactions => {
          dispatch(success(transactions))
        },
        error => {
          dispatch(failure(error));
        })
  };
  function request() {
    return {
      type: TransactionContants.PENDING_REQUEST
    }
  }

  function success(transactions) {
    return {
      type: TransactionContants.PENDING_SUCCESS,
      transactions
    }
  }

  function failure(error) {
    return {
      type: TransactionContants.PENDING_FAILURE,
      error
    }
  }
}

function getDetail(t_id) {
  return dispatch => {
    dispatch(request());
    transactionServices.getTransactionDetail(t_id)
      .then(
        transaction => {
          dispatch(success(transaction))
        },
        error => {
          dispatch(failure(error));
        }
    );
  }
  function request() {
    return {
      type: TransactionContants.DETAIL_REQUEST,
    }
  }

  function success(transaction) {
    return {
      type: TransactionContants.DETAIL_SUCCESS,
      transaction
    }
  }

  function failure(error) {
    return {
      type: TransactionContants.DETAIL_FAILURE,
      error
    }
  }
}
