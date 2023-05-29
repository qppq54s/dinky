/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import Icon, {DeleteTwoTone} from "@ant-design/icons";


const IconStyle = {
  height: "16px",
  width: "16px",
};

/**
 *  This is a custom icon that is used to indicate a dangerous action.{@link DeleteTwoTone}
 * @constructor
 */
export const DangerDeleteIcon = () => {
  return <>
    <DeleteTwoTone twoToneColor={"red"}/>
  </>;
};


/**
 * This is a custom icon that is used to indicate a show log action.
 * @constructor
 */
export const ShowLogIcon = () => {
  return <>
    <Icon style={{...IconStyle}} component={() => (
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M426.666667 834.133333c0-10.666667-8.533333-21.333333-21.333334-21.333333l-149.333333-2.133333c-23.466667 0-42.666667-19.2-42.666667-42.666667V256c0-23.466667 19.2-42.666667 42.666667-42.666667h426.666667c23.466667 0 42.666667 19.2 42.666666 42.666667v149.333333c0 12.8 8.533333 21.333333 21.333334 21.333334h42.666666c12.8 0 21.333333-8.533333 21.333334-21.333334v-192c0-46.933333-38.4-85.333333-85.333334-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h192c12.8 0 21.333333-10.666667 21.333334-21.333333v-40.533334z"
          fill="#1890ff"></path>
        <path
          d="M887.466667 868.266667l-91.733334-89.6c21.333333-34.133333 36.266667-74.666667 36.266667-117.333334 0-117.333333-96-213.333333-213.333333-213.333333s-213.333333 96-213.333334 213.333333 96 213.333333 213.333334 213.333334c42.666667 0 83.2-12.8 117.333333-36.266667l91.733333 89.6c8.533333 8.533333 21.333333 8.533333 29.866667 0l29.866667-29.866667c8.533333-8.533333 8.533333-21.333333 0-29.866666zM618.666667 789.333333c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z"
          fill="#297AFF"></path>
        <path
          d="M576 384H320c-12.8 0-21.333333-8.533333-21.333333-21.333333v-42.666667c0-12.8 8.533333-21.333333 21.333333-21.333333h256c12.8 0 21.333333 8.533333 21.333333 21.333333v42.666667c0 12.8-8.533333 21.333333-21.333333 21.333333zM407.466667 512h-85.333334c-12.8 0-21.333333-8.533333-21.333333-21.333333v-42.666667c0-12.8 8.533333-21.333333 21.333333-21.333333h85.333334c12.8 0 21.333333 8.533333 21.333333 21.333333v42.666667c0 12.8-10.666667 21.333333-21.333333 21.333333z"
          fill="#1890ff"></path>
      </svg>
    )}/>
  </>;
};

/**
 * This is a custom icon that is used to indicate a show code tree action.
 * @constructor
 */
export const ShowCodeTreeIcon = () => {
  return <>
    <Icon style={{...IconStyle}} component={() => (
      <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M432.6912 784.6912h-199.68c-33.8944 0-61.44-25.6-61.44-57.088v-74.752a20.48 20.48 0 1 1 40.96 0v74.752c0 6.3488 8.7552 13.5168 20.48 13.5168h199.68a21.8112 21.8112 0 0 1 0 43.5712zM599.4496 784.6912h-61.44a21.8112 21.8112 0 0 1 0-43.5712h61.44a21.8112 21.8112 0 0 1 0 43.5712zM865.28 784.6912h-186.88a21.8112 21.8112 0 0 1 0-43.5712H865.28c11.6736 0 20.48-7.168 20.48-13.5168V180.4288c0-6.3488-8.7552-13.5168-20.48-13.5168H232.8576c-11.6736 0-20.48 7.168-20.48 13.5168v75.9296a20.48 20.48 0 1 1-40.96 0V180.4288c0-31.488 27.4432-57.088 61.184-57.088H865.28c33.792 0 61.44 25.6 61.44 57.088v547.1744c0 31.488-27.4432 57.088-61.44 57.088z"
          fill="#1296db"></path>
        <path
          d="M91.0336 405.3504h301.4144a20.48 20.48 0 0 1 20.48 20.48v133.7344a20.48 20.48 0 0 1-20.48 20.48H111.5136a20.48 20.48 0 0 1-20.48-20.48V405.3504zM311.3984 405.3504h-220.16v-48.7424a20.48 20.48 0 0 1 20.48-20.48h157.9008a20.48 20.48 0 0 1 19.2 13.0048z"
          fill="#1296db"></path>
        <path
          d="M369.9712 849.92m20.48 0l266.24 0q20.48 0 20.48 20.48l0 10.24q0 20.48-20.48 20.48l-266.24 0q-20.48 0-20.48-20.48l0-10.24q0-20.48 20.48-20.48Z"
          fill="#1296db"></path>
        <path
          d="M507.4944 307.1488m20.48 0l266.24 0q20.48 0 20.48 20.48l0 10.24q0 20.48-20.48 20.48l-266.24 0q-20.48 0-20.48-20.48l0-10.24q0-20.48 20.48-20.48Z"
          fill="#1296db"></path>
        <path
          d="M507.4944 428.3904m20.48 0l266.24 0q20.48 0 20.48 20.48l0 10.24q0 20.48-20.48 20.48l-266.24 0q-20.48 0-20.48-20.48l0-10.24q0-20.48 20.48-20.48Z"
          fill="#1296db"></path>
        <path
          d="M507.4944 549.6832m20.48 0l266.24 0q20.48 0 20.48 20.48l0 10.24q0 20.48-20.48 20.48l-266.24 0q-20.48 0-20.48-20.48l0-10.24q0-20.48 20.48-20.48Z"
          fill="#1296db"></path>
      </svg>
    )}/>
  </>;
};

export const WebIcon = () => {
    return <>
        <Icon style={{...IconStyle}} component={() => (
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" >
                <path
                    d="M221.866667 405.333333c-14.933333 36.266667-23.466667 76.8-23.466667 117.333334 0 34.133333 6.4 68.266667 17.066667 98.133333 19.2-32 44.8-68.266667 76.8-106.666667-4.266667-8.533333-8.533333-19.2-8.533334-29.866666 0-8.533333 2.133333-14.933333 4.266667-21.333334-29.866667-21.333333-51.2-40.533333-66.133333-57.6zM332.8 778.666667c10.666667-8.533333 19.2-17.066667 29.866667-23.466667 87.466667-66.133333 166.4-104.533333 228.266666-125.866667 0-4.266667-2.133333-8.533333-2.133333-12.8v-6.4c-21.333333-6.4-44.8-12.8-66.133333-21.333333-55.466667-19.2-102.4-42.666667-142.933334-64-10.666667 10.666667-25.6 17.066667-40.533333 17.066667-8.533333 0-14.933333-2.133333-21.333333-4.266667-40.533333 46.933333-68.266667 91.733333-87.466667 125.866667 25.6 46.933333 59.733333 85.333333 102.4 115.2zM535.466667 556.8c23.466667 8.533333 46.933333 14.933333 70.4 21.333333 6.4-6.4 12.8-10.666667 19.2-12.8-6.4-23.466667-14.933333-46.933333-25.6-70.4-14.933333-34.133333-32-66.133333-49.066667-93.866666-6.4 2.133333-10.666667 2.133333-17.066667 2.133333-12.8 0-25.6-4.266667-36.266666-12.8-23.466667 14.933333-46.933333 29.866667-72.533334 49.066667l-32 25.6c2.133333 6.4 4.266667 14.933333 4.266667 21.333333v8.533333c38.4 19.2 85.333333 42.666667 138.666667 61.866667zM834.133333 522.666667c0-89.6-38.4-172.8-102.4-228.266667-32 6.4-81.066667 19.2-140.8 44.8v6.4c0 12.8-4.266667 23.466667-10.666666 34.133333 19.2 29.866667 36.266667 64 53.333333 102.4 10.666667 27.733333 21.333333 55.466667 29.866667 81.066667 17.066667 4.266667 32 17.066667 40.533333 34.133333 12.8 2.133333 25.6 2.133333 38.4 2.133334 32 2.133333 61.866667 0 85.333333 0 2.133333-27.733333 6.4-51.2 6.4-76.8zM516.266667 290.133333c6.4-2.133333 10.666667-2.133333 17.066666-2.133333 17.066667 0 32 6.4 42.666667 19.2 46.933333-21.333333 87.466667-34.133333 119.466667-42.666667-51.2-34.133333-113.066667-55.466667-179.2-55.466666-23.466667 0-49.066667 2.133333-70.4 8.533333 19.2 19.2 44.8 42.666667 70.4 72.533333zM661.333333 800c2.133333-32 0-74.666667-10.666666-128h-4.266667c-14.933333 0-27.733333-4.266667-36.266667-12.8-59.733333 21.333333-138.666667 57.6-224 123.733333-6.4 4.266667-12.8 10.666667-21.333333 14.933334 44.8 23.466667 96 36.266667 149.333333 36.266666 53.333333 2.133333 104.533333-10.666667 147.2-34.133333zM238.933333 371.2c14.933333 17.066667 38.4 40.533333 72.533334 66.133333 8.533333-4.266667 19.2-8.533333 29.866666-8.533333 10.666667 0 21.333333 2.133333 29.866667 8.533333l32-25.6c25.6-19.2 51.2-36.266667 74.666667-51.2-2.133333-4.266667-2.133333-8.533333-2.133334-14.933333 0-12.8 4.266667-23.466667 10.666667-34.133333-32-36.266667-59.733333-64-83.2-81.066667-70.4 25.6-128 76.8-164.266667 140.8zM733.866667 633.6c-6.4 0-17.066667 0-32 4.266667-4.266667 8.533333-8.533333 14.933333-14.933334 21.333333 8.533333 46.933333 12.8 87.466667 12.8 119.466667 51.2-36.266667 91.733333-85.333333 115.2-145.066667h-81.066666z"
                    fill="#00C1DE"></path>
                <path
                    d="M661.333333 87.466667C652.8 61.866667 629.333333 42.666667 599.466667 42.666667c-34.133333 0-64 27.733333-64 61.866666s27.733333 61.866667 64 61.866667c17.066667 0 34.133333-6.4 44.8-19.2C804.266667 202.666667 917.333333 349.866667 917.333333 522.666667c0 42.666667-6.4 83.2-19.2 121.6l55.466667 32c17.066667-46.933333 27.733333-100.266667 27.733333-153.6C981.333333 320 846.933333 147.2 661.333333 87.466667zM842.666667 740.266667c-34.133333 0-64 27.733333-64 61.866666 0 6.4 2.133333 10.666667 2.133333 17.066667-70.4 61.866667-164.266667 100.266667-266.666667 100.266667-117.333333 0-224-51.2-298.666666-130.133334l-57.6 32c85.333333 98.133333 213.333333 160 354.133333 160 119.466667 0 230.4-44.8 311.466667-119.466666 4.266667 2.133333 8.533333 2.133333 14.933333 2.133333 34.133333 0 64-27.733333 64-61.866667s-25.6-61.866667-59.733333-61.866666zM121.6 599.466667c-4.266667-25.6-8.533333-49.066667-8.533333-76.8 0-189.866667 136.533333-347.733333 317.866666-386.133334v-64C213.333333 110.933333 49.066667 298.666667 49.066667 522.666667c0 32 4.266667 64 10.666666 93.866666-10.666667 10.666667-17.066667 25.6-17.066666 42.666667 0 34.133333 27.733333 61.866667 64 61.866667 34.133333 0 64-27.733333 64-61.866667 0-29.866667-21.333333-53.333333-49.066667-59.733333z"
                    fill="#00C1DE" ></path>
            </svg>
        )}/>
    </>;

}