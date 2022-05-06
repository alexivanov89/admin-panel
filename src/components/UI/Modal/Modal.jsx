import React, { useState } from 'react';
import { Modal as AntdModal, Button } from 'antd';

const Modal = (props) => {
  const { children, isModalVisible, title, handleOk, handleCancel } = props;

  return (
    <AntdModal
      cancelText="Отмена"
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </AntdModal>
  );
};

export default Modal;
