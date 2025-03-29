import React from "react";
import { useAuth } from "../../../supabase/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  Package,
  Truck,
  Users,
  Warehouse,
  FileText,
  Phone,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

type DashboardProps = {
  isLoading?: boolean;
};

const RoleBasedDashboard: React.FC<DashboardProps> = ({
  isLoading = false,
}) => {
  const { userRole } = useAuth();

  // Common dashboard elements that all roles can see
  const CommonDashboardElements = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Shipment Status</CardTitle>
          <CardDescription>View all shipment statuses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-gray-500">Active Shipments</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Delivery Map</CardTitle>
          <CardDescription>Interactive delivery tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Truck className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-gray-500">In Transit</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Analytics</CardTitle>
          <CardDescription>Performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[120px] w-full bg-gray-100 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Analytics Visualization</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Role-specific dashboard content
  const renderRoleSpecificContent = () => {
    switch (userRole) {
      case "Admin":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admin Dashboard</CardTitle>
                <CardDescription>Manage system and users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <Users className="h-8 w-8 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-medium">User Management</h3>
                      <p className="text-sm text-gray-500">
                        Manage user accounts and permissions
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg flex items-center">
                    <ShieldCheck className="h-8 w-8 text-purple-500 mr-3" />
                    <div>
                      <h3 className="font-medium">System Settings</h3>
                      <p className="text-sm text-gray-500">
                        Configure system parameters
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Warehouse Manager":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Warehouse Dashboard</CardTitle>
                <CardDescription>
                  Manage inventory and shipments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-amber-50 p-4 rounded-lg flex items-center">
                    <Warehouse className="h-8 w-8 text-amber-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Inventory Management</h3>
                      <p className="text-sm text-gray-500">
                        Track and manage warehouse inventory
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg flex items-center">
                    <Package className="h-8 w-8 text-green-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Process Outgoing</h3>
                      <p className="text-sm text-gray-500">
                        Prepare packages for shipping
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Shipping Officer":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Dashboard</CardTitle>
                <CardDescription>Manage shipping operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <Truck className="h-8 w-8 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Create Shipment</h3>
                      <p className="text-sm text-gray-500">
                        Create new shipping orders
                      </p>
                    </div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg flex items-center">
                    <Users className="h-8 w-8 text-indigo-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Assign Delivery</h3>
                      <p className="text-sm text-gray-500">
                        Assign personnel to deliveries
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Delivery":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Dashboard</CardTitle>
                <CardDescription>Manage delivery operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg flex items-center">
                    <Truck className="h-8 w-8 text-green-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Update Status</h3>
                      <p className="text-sm text-gray-500">
                        Update delivery status in real-time
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg flex items-center">
                    <AlertCircle className="h-8 w-8 text-red-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Report Issues</h3>
                      <p className="text-sm text-gray-500">
                        Report delivery problems
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Accounts":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Accounts Dashboard</CardTitle>
                <CardDescription>Manage financial operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg flex items-center">
                    <CreditCard className="h-8 w-8 text-emerald-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Invoices</h3>
                      <p className="text-sm text-gray-500">
                        Manage customer invoices
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <FileText className="h-8 w-8 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Reports</h3>
                      <p className="text-sm text-gray-500">
                        Generate financial reports
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Tele-sales":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tele-sales Dashboard</CardTitle>
                <CardDescription>Manage sales operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg flex items-center">
                    <Phone className="h-8 w-8 text-indigo-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Call Queue</h3>
                      <p className="text-sm text-gray-500">
                        Manage customer calls
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                    <Users className="h-8 w-8 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-medium">Customer List</h3>
                      <p className="text-sm text-gray-500">
                        View and manage customers
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Employee":
      case "Supervisor":
      case "Customer":
      default:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{userRole || "User"} Dashboard</CardTitle>
                <CardDescription>Welcome to your dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <p>View and manage your shipments and account information.</p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-[200px] bg-gray-200 rounded-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-[150px] bg-gray-200 rounded-lg"></div>
          <div className="h-[150px] bg-gray-200 rounded-lg"></div>
          <div className="h-[150px] bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!userRole) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Unable to determine user role. Please contact support.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{userRole} Dashboard</h1>
        <p className="text-gray-500">Welcome to your personalized dashboard</p>
      </div>

      <CommonDashboardElements />
      {renderRoleSpecificContent()}
    </div>
  );
};

export default RoleBasedDashboard;
