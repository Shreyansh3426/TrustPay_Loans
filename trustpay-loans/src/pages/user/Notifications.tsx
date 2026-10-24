import {
  Bell,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

export default function Notifications() {
  const notifications = [
    {
      title: "Loan Approved",
      message:
        "Your Personal Loan application has been approved.",
      type: "success",
      time: "2 hours ago",
    },
    {
      title: "PAN Card Verified",
      message:
        "Your PAN Card has been successfully verified.",
      type: "success",
      time: "1 day ago",
    },
    {
      title: "EMI Due Soon",
      message:
        "Your EMI payment is due in 5 days.",
      type: "warning",
      time: "Today",
    },
    {
      title: "Special Offer",
      message:
        "You are eligible for a pre-approved top-up loan.",
      type: "info",
      time: "3 days ago",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div
        className="
        bg-gradient-to-r
        from-[#001A4D]
        to-[#002B7F]
        rounded-3xl
        p-8
        text-white
        shadow-xl
        "
      >
        <h1 className="text-4xl font-bold">
          Notifications
        </h1>

        <p className="text-blue-100 mt-2">
          Stay updated with your loan activity.
        </p>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-6">

        <SummaryCard
          title="Total"
          value="4"
        />

        <SummaryCard
          title="Unread"
          value="2"
        />

        <SummaryCard
          title="Important"
          value="1"
        />

      </div>

      {/* Notifications List */}
      <div className="space-y-4">

        {notifications.map(
          (notification) => (
            <NotificationCard
              key={
                notification.title
              }
              {...notification}
            />
          )
        )}

      </div>

    </div>
  );
}

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
      bg-white
      dark:bg-slate-900
      border
      border-slate-300
      dark:border-slate-800
      rounded-3xl
      p-6
      shadow-md
      hover:border-blue-500
      transition-all
      "
    >
      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2 dark:text-white">
        {value}
      </h3>
    </div>
  );
}

function NotificationCard({
  title,
  message,
  type,
  time,
}: {
  title: string;
  message: string;
  type: string;
  time: string;
}) {
  const icon =
    type === "success" ? (
      <CheckCircle className="text-green-500" />
    ) : type === "warning" ? (
      <AlertCircle className="text-orange-500" />
    ) : (
      <Bell className="text-blue-500" />
    );

  return (
    <div
      className="
      bg-white
      dark:bg-slate-900
      border
      border-slate-300
      dark:border-slate-800
      rounded-3xl
      p-6
      shadow-md
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      "
    >
      <div className="flex justify-between">

        <div className="flex gap-4">

          {icon}

          <div>

            <h3 className="font-semibold dark:text-white">
              {title}
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              {message}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">

          <Clock size={14} />

          {time}

        </div>

      </div>
    </div>
  );
}
