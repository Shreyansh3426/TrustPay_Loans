import { useState } from "react";
import {
  Upload,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react";

export default function Documents() {
  const [files, setFiles] = useState<
    Record<string, File | null>
  >({
    Aadhaar: null,
    PAN: null,
    SalarySlip: null,
    BankStatement: null,
  });

  const handleFileChange = (
    key: string,
    file: File | null
  ) => {
    setFiles((prev) => ({
      ...prev,
      [key]: file,
    }));
  };

  const docs = [
    {
      key: "Aadhaar",
      name: "Aadhaar Card",
    },
    {
      key: "PAN",
      name: "PAN Card",
    },
    {
      key: "SalarySlip",
      name: "Salary Slip",
    },
    {
      key: "BankStatement",
      name: "Bank Statement",
    },
  ];

  const uploadedCount =
    Object.values(files).filter(Boolean)
      .length;

  const completion = Math.round(
    (uploadedCount / docs.length) * 100
  );

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
          Documents Center
        </h1>

        <p className="text-blue-100 mt-2">
          Upload and manage your KYC documents.
        </p>
      </div>

      {/* Summary */}
      <div
        className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-300
        dark:border-slate-800
        rounded-3xl
        p-8
        shadow-md
        "
      >
        <h2 className="text-2xl font-bold text-[#001A4D] dark:text-white">
          Verification Summary
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mt-6">

          <SummaryCard
            title="Required"
            value="4"
          />

          <SummaryCard
            title="Uploaded"
            value={String(
              uploadedCount
            )}
          />

          <SummaryCard
            title="Pending"
            value={String(
              docs.length -
                uploadedCount
            )}
          />

          <SummaryCard
            title="Completion"
            value={`${completion}%`}
          />

        </div>
      </div>

      {/* Progress */}
      <div
        className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-300
        dark:border-slate-800
        rounded-3xl
        p-8
        shadow-md
        "
      >
        <div className="flex justify-between mb-4">

          <h2 className="text-xl font-semibold dark:text-white">
            Document Completion
          </h2>

          <span className="font-semibold dark:text-white">
            {completion}%
          </span>

        </div>

        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">

          <div
            className="
            h-4
            bg-gradient-to-r
            from-[#001A4D]
            to-[#0047CC]
            rounded-full
            transition-all
            duration-500
            "
            style={{
              width: `${completion}%`,
            }}
          />

        </div>
      </div>

      {/* Documents */}
      <div className="grid md:grid-cols-2 gap-6">

        {docs.map((doc) => {
          const file =
            files[doc.key];

          return (
            <div
              key={doc.key}
              className="
              bg-white
              dark:bg-slate-900
              border
              border-slate-300
              dark:border-slate-800
              rounded-3xl
              p-6
              shadow-md
              hover:-translate-y-1
              hover:shadow-xl
              transition-all
              duration-300
              "
            >
              <div className="flex justify-between">

                <div>

                  <div className="flex items-center gap-3 mb-2">

                    <FileText className="text-[#001A4D] dark:text-blue-400" />

                    <h3 className="font-semibold text-lg dark:text-white">
                      {doc.name}
                    </h3>

                  </div>

                  <p className="text-slate-500 dark:text-slate-400">
                    {file
                      ? file.name
                      : "No file uploaded"}
                  </p>

                </div>

                {file ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <Clock className="text-orange-500" />
                )}

              </div>

              <label
                className="
                mt-5
                inline-flex
                items-center
                gap-2
                bg-gradient-to-r
                from-[#001A4D]
                to-[#0047CC]
                text-white
                px-4
                py-2
                rounded-xl
                cursor-pointer
                hover:scale-105
                transition-all
                "
              >
                <Upload size={18} />

                {file
                  ? "Replace"
                  : "Upload"}

                <input
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    handleFileChange(
                      doc.key,
                      e.target.files?.[0] ||
                        null
                    )
                  }
                />
              </label>

            </div>
          );
        })}

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
      bg-slate-50
      dark:bg-slate-800
      border
      border-slate-200
      dark:border-slate-700
      rounded-2xl
      p-5
      hover:border-blue-500
      transition-all
      "
    >
      <p className="text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className="text-3xl font-bold mt-2 text-slate-900 dark:text-white">
        {value}
      </h3>
    </div>
  );
}