

/**
 * PageSkeleton — full-page shimmer skeleton matching visual hierarchy
 * Displayed during lazy route chunk loading.
 */
export default function PageSkeleton() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F5F8FB',
        display: 'flex',
        flexDirection: 'column',
      }}
      aria-label="Loading page"
      role="status"
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-block {
          background: linear-gradient(90deg, #EDF3F8 0%, #F5F8FB 50%, #EDF3F8 100%);
          background-size: 200% 100%;
          animation: shimmer 1.8s ease-in-out infinite;
          border-radius: 4px;
        }
      `}</style>

      {/* Skeleton NavBar */}
      <header
        style={{
          height: '56px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          justifyContent: 'space-between',
        }}
      >
        <div className="shimmer-block" style={{ width: '120px', height: '24px' }} />
        <div style={{ display: 'flex', gap: '16px' }}>
          <div className="shimmer-block" style={{ width: '60px', height: '20px' }} />
          <div className="shimmer-block" style={{ width: '60px', height: '20px' }} />
          <div className="shimmer-block" style={{ width: '80px', height: '32px', borderRadius: '6px' }} />
        </div>
      </header>

      {/* Skeleton Content Area */}
      <main
        style={{
          flex: 1,
          padding: '48px 24px',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div className="shimmer-block" style={{ width: '40%', height: '48px', borderRadius: '8px' }} />
        <div className="shimmer-block" style={{ width: '60%', height: '24px' }} />
        <div className="shimmer-block" style={{ width: '100%', height: '400px', borderRadius: '12px', marginTop: '24px' }} />
      </main>
    </div>
  );
}
