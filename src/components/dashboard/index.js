import { useState } from 'react';
import Link from 'next/link';
import WorkspaceLayout from '../../components/dashboard/WorkspaceLayout';

export default function Dashboard() {
  // Mock data for demonstration purposes
  const [weddingDetails, setWeddingDetails] = useState({
    date: '2025-07-12',
    daysUntil: 85,
    location: 'Crystal Garden Venue, New York',
    completedTasks: 15,
    totalTasks: 42,
    recentRSVPs: [
      { name: 'John & Sarah Smith', status: 'accepted', guests: 2 },
      { name: 'Michael Johnson', status: 'accepted', guests: 1 },
      { name: 'Emily & David Brown', status: 'declined', guests: 0 },
      { name: 'Jennifer Wilson', status: 'pending', guests: null },
    ],
    upcomingTasks: [
      { id: 1, title: 'Book caterer', dueDate: '2025-04-30', status: 'pending' },
      { id: 2, title: 'Send invitations', dueDate: '2025-05-15', status: 'pending' },
      { id: 3, title: 'Final dress fitting', dueDate: '2025-06-20', status: 'pending' },
    ]
  });

  return (
    <WorkspaceLayout title="Dashboard">
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-gray-800">Welcome, Amanda & Michael!</h1>
        <p className="text-gray-600">Let's continue planning your perfect day.</p>
      </div>

      {/* Wedding Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-pink-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-1">Wedding Date</h3>
            <p className="text-3xl font-bold text-pink-600 mb-1">{weddingDetails.date}</p>
            <p className="text-gray-600">{weddingDetails.daysUntil} days to go!</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-1">Wedding Location</h3>
            <p className="text-xl font-bold text-purple-600">{weddingDetails.location}</p>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-1">Planning Progress</h3>
            <div className="flex justify-center items-center">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#EC4899"
                  strokeWidth="3"
                  strokeDasharray={`${(weddingDetails.completedTasks / weddingDetails.totalTasks) * 100}, 100`}
                  strokeLinecap="round"
                />
                <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill="#4B5563" fontWeight="bold">
                  {Math.round((weddingDetails.completedTasks / weddingDetails.totalTasks) * 100)}%
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Tasks</h2>
            <Link href="/dashboard/timeline" className="text-sm text-pink-600 hover:text-pink-700">
              View All
            </Link>
          </div>
          
          <div className="space-y-4">
            {weddingDetails.upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 h-4 w-4 rounded-full bg-yellow-400 mr-3"></div>
                <div className="flex-grow">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                </div>
                <button className="px-3 py-1 bg-pink-100 text-pink-600 hover:bg-pink-200 rounded-md text-sm">
                  Complete
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              Add New Task
            </button>
          </div>
        </div>
        
        {/* Recent RSVPs */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recent RSVPs</h2>
            <Link href="/dashboard/guests" className="text-sm text-pink-600 hover:text-pink-700">
              View All Guests
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Name</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Guests</th>
                </tr>
              </thead>
              <tbody>
                {weddingDetails.recentRSVPs.map((rsvp, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{rsvp.name}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        rsvp.status === 'accepted' ? 'bg-green-100 text-green-800' :
                        rsvp.status === 'declined' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {rsvp.status.charAt(0).toUpperCase() + rsvp.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {rsvp.guests !== null ? rsvp.guests : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
              Send RSVP Reminders
            </button>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/dashboard/website" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
            <svg className="h-8 w-8 text-pink-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Edit Website</span>
          </Link>
          
          <Link href="/dashboard/guests/add" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
            <svg className="h-8 w-8 text-pink-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Add Guests</span>
          </Link>
          
          <Link href="/dashboard/budget" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
            <svg className="h-8 w-8 text-pink-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Update Budget</span>
          </Link>
          
          <Link href="/dashboard/photos/upload" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors">
            <svg className="h-8 w-8 text-pink-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Upload Photos</span>
          </Link>
        </div>
      </div>
    </WorkspaceLayout>
  );
}