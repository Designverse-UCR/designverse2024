"use client";
import { STATUSES, TAGS, COLUMNS, DROPDOWN } from "@/data/admin/Volunteers";
import Table from "./dashboard/Dashboard";

const Volunteers = ({ searchParams }) => {
  return (
    <div className="h-full font-workSans flex flex-col py-4 gap-3">
      <Table
        searchParams={searchParams}
        title="Volunteers"
        columns={COLUMNS}
        tags={TAGS}
        statuses={STATUSES}
        Dropdown={DROPDOWN}
      />
    </div>
  );
};
export default Volunteers;
