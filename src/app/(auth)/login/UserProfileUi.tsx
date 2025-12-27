"use client";
import { User } from "@/types/SliceTypes";
import CustomeBtn from "@/components/ui/CustomeBtn";

interface UserProfileUiProps {
  user: User;
  onLogout: () => void;
}

const UserProfileUi = ({ user, onLogout }: UserProfileUiProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
        <div className="space-y-2">
          <div className="w-20 h-20 bg-amber-100 text-amber-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto">
            {user.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome {user.name}
          </h2>
          <p className="text-gray-500">{user.email}</p>
          <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
            Role: {user.role}
          </span>
        </div>

        <div className="pt-4 space-y-3">
          <CustomeBtn
            onClick={onLogout}
            className="w-full py-3 cursor-pointer bg-amber-900 text-white"
          >
            Logout
          </CustomeBtn>
        </div>
      </div>
    </div>
  );
};

export default UserProfileUi;
