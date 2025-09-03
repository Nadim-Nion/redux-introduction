import AddUserModal from "@/components/modules/users/AddUserModal";
import UserCard from "@/components/modules/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useSelector } from "react-redux";

export default function User() {
  const users = useSelector(selectUsers);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <AddUserModal />
      </div>
      <div className="space-y-5 mt-5 grid grid-cols-3 gap-5">
        {users.map((user) => (
         <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
