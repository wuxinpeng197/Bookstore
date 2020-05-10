import React from 'react';
import UserLayout from '../hoc/user';
import MyButton from '../util/Button';
import UserHistoryBlock from '../util/historyBlock';

const UserDashboard = ({user}) => {
    return (
        <UserLayout>
            <div>
                
                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                       <h5>NAME:</h5> <span>{user.userData.name}</span>
                       <h5>LAST_NAME:</h5> <span>{user.userData.lastname}</span>
                       <h5>EMAIL:</h5> <span>{user.userData.email}</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>
                {   
                    user.userData.history?
                <div className="user_nfo_panel">
                    <h1>History purchases</h1>
                    <div className="user_product_block_wrapper">
                    <UserHistoryBlock
                                products={user.userData.history}
                            />
                    </div>
               </div>
              :
              null}    
            </div>
        </UserLayout>
        
    );
};

export default UserDashboard;