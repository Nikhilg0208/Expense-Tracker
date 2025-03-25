import React from "react";
import { useForm } from "react-hook-form";
const CreateAccountDrawer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-6">
      <p className="text-lg font-semibold mb-4">Create New Account</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col space-y-4">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Account Name
          </label>
          <input
            id="name"
            placeholder="e.g., Main Checking"
            {...register("name", { required: "Account name is required" })}
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label
            htmlFor="type"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Account Type
          </label>
          <select
            id="type"
            {...register("type", { required: "Account type is required" })}
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-gray-400 outline-none cursor-pointer"
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="CURRENT">Current</option>
            <option value="SAVINGS">Savings</option>
          </select>
          {errors.type && (
            <p className="text-sm text-red-500">{errors.type.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <label
            htmlFor="balance"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Initial Balance
          </label>
          <input
            id="balance"
            type="number"
            step="0.01"
            placeholder="0.00"
            {...register("balance")}
            className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-gray-400 outline-none"
          />
          {errors.balance && (
            <p className="text-sm text-red-500">{errors.balance.message}</p>
          )}
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="w-full  text-black p-2 rounded-md hover:bg-gray-100 border border-gray-200 transition duration-200"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountDrawer;
